import { prisma } from './lib/prisma';

async function main() {
    try {
        console.log('Connecting to database...');
        await prisma.$connect();
        console.log('Successfully connected!');
        const count = await prisma.blogPost.count();
        console.log(`Found ${count} blog posts.`);
        await prisma.$disconnect();
    } catch (e) {
        console.error('Connection failed:', e);
        process.exit(1);
    }
}

main();
