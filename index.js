const { Client } = require("@notionhq/client");
const { config } = require("dotenv");
config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const args = process.argv.slice(2);
const command = args[0];

async function createPage(pageId, pageName) {
  try {
    const response = await notion.pages.create({
      parent: {
        type: "page_id",
        page_id: pageId,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: pageName,
              },
            },
          ],
        },
      },
    });

    console.log(`Page created successfully with ID: ${response.id}`);
  } catch (error) {
    console.error("Failed to create page:", error.message);
  }
}

if (command === "create") {
  createPage(args[1], args[2]);
}
