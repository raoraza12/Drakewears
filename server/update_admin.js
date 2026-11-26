require('dotenv').config();
const prisma = require('./lib/prisma');
const bcrypt = require('bcryptjs');

async function updateAdmin() {
  try {
    // Admin password comes ONLY from the environment (see server/.env.example).
    // Never hardcode a password here: this file is committed to git.
    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!adminPassword) {
      throw new Error('ADMIN_PASSWORD is not set. Set it in server/.env (never commit it) and re-run this script.');
    }
    const hashedPassword = await bcrypt.hash(adminPassword, 12);

    const user = await prisma.user.upsert({
      where: { email: 'drakewearsofficial@gmail.com' },
      update: {
        password: hashedPassword,
        role: 'admin'
      },
      create: {
        name: 'DrakeWears Admin',
        email: 'drakewearsofficial@gmail.com',
        password: hashedPassword,
        role: 'admin'
      }
    });

    console.log('Admin user ready:', user.email);
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await prisma.$disconnect();
  }
}

updateAdmin();
