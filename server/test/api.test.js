import http from 'http';
import app from '../server.js';

// Simple automated route test for Node.js
async function runTests() {
  console.log('🧪 Starting backend API route tests...\n');
  
  const testServer = http.createServer(app);
  await new Promise((resolve) => testServer.listen(0, resolve));
  const port = testServer.address().port;
  const baseUrl = `http://127.0.0.1:${port}`;

  let passed = 0;
  let failed = 0;

  async function assert(name, condition) {
    if (condition) {
      console.log(`  ✅ PASS: ${name}`);
      passed++;
    } else {
      console.error(`  ❌ FAIL: ${name}`);
      failed++;
    }
  }

  try {
    // 1. Test Health Endpoint
    const healthRes = await fetch(`${baseUrl}/api/health`);
    const healthData = await healthRes.json();
    await assert('GET /api/health returns 200', healthRes.status === 200);
    await assert('Health response indicates status "online"', healthData.status === 'online');
    await assert('Health response indicates system name', healthData.system === 'IMAN // BUILD LOG API');

    // 2. Test Contact Validation: missing fields
    const invalidRes = await fetch(`${baseUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'A' }),
    });
    const invalidData = await invalidRes.json();
    await assert('POST /api/contact fails on incomplete data with 400', invalidRes.status === 400);
    await assert('Validation error message is returned', typeof invalidData.error === 'string');

    // 3. Test Honeypot detection
    const botRes = await fetch(`${baseUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Spam Bot',
        email: 'bot@spam.com',
        message: 'This is spam content that should be caught',
        botField: 'I am a malicious robot',
      }),
    });
    const botData = await botRes.json();
    await assert('POST /api/contact catches honeypot field', botRes.status === 200 && botData.success === true);

    // 4. Test Valid Contact Submission
    const validRes = await fetch(`${baseUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Recruiter Test',
        email: 'recruiter@techcorp.com',
        subject: 'Engineering Opportunity',
        roleOrCompany: 'Engineering Manager @ TechCorp',
        message: 'Hello Iman, we reviewed your Build Log and would love to connect about an entry-level frontend role.',
      }),
    });
    const validData = await validRes.json();
    await assert('POST /api/contact succeeds with 201', validRes.status === 201);
    await assert('Submission returns success true and message ID', validData.success === true && (validData.id || validData.messageId));

    console.log(`\n🏁 Test Results: ${passed} passed, ${failed} failed.`);
  } catch (err) {
    console.error('Test execution failed with error:', err);
    failed++;
  } finally {
    testServer.close();
    process.exit(failed > 0 ? 1 : 0);
  }
}

runTests();
