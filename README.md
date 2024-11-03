# Create Notion Pages with the command line

```bash
npm install
node index.js create <page_id> <page_name>
```

### Using your own Notion API key

```bash
export NOTION_API_KEY=<your_notion_api_key>
```

or using an `.env` file:

```bash
touch .env
echo "NOTION_API_KEY=<your_notion_api_key>" >> .env
```
