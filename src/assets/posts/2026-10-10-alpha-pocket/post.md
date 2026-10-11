I built AlphaPocket to explore protein pockets without running a model every time I wanted to look at a result. The expensive work happens beforehand. The browser searches the saved embeddings and lets me inspect what comes back.

The current database has 55,986 searchable pockets and 18,130 whole-protein embeddings. Those are different kinds of records. I can compare a complete protein with other complete proteins, or select a predicted pocket and compare that smaller region.

![AlphaPocket search page with live dataset counts and example proteins](assets/posts/2026-10-10-alpha-pocket/search.png)

## Looking at a result

BRAF is a useful starting point for the demo. I open pocket 1, see its residues highlighted on the structure, and get a list of the nearest pocket embeddings. ARAF and RAF1 appear near the top. I can then put two pockets side by side and inspect their residue counts, P2Rank scores, and model confidence.

The ranking uses cosine distance. A lower value means the vectors point in a more similar direction. I use that to find regions worth looking at more closely, with the pocket score and structure confidence alongside the result.

![BRAF pocket 1 compared with ARAF pocket 1](assets/posts/2026-10-10-alpha-pocket/comparison.png)

The selection is stored in the URL, including the second pocket in a comparison. That makes it possible to refresh the page or send the same view to someone else. The neighbor list exports to CSV, and an individual comparison exports to JSON.

## Getting away from the search box

The pocket atlas gives me another way into the dataset. Its axes show P2Rank score against surface atom count, or helix percentage against strand percentage. The colors can show model confidence, pocket score, or secondary-structure composition.

I can highlight a protein, browse the distribution of pocket descriptors, and open an individual point to inspect that exact region. It is useful when I want to explore the dataset without starting from a particular search result.

![Pocket atlas showing helix and strand composition](assets/posts/2026-10-10-alpha-pocket/atlas.png)

## The work behind the browser

The pipeline starts from protein structures, detects candidate pockets with P2Rank, and computes ESM3 embeddings. There is a local GPU runner and a cloud version. The cloud setup uses GCP Spot workers, Pub/Sub for the queue, and BigQuery for the output. The explorer reads an exported PostgreSQL database with pgvector.

The screenshot below is from the July run. You can see the backlog fall to zero and the worker count drop back to zero afterward. Keeping that processing separate from the explorer lets me browse the results without keeping GPU workers running.

![GCP monitoring dashboard showing the processing backlog and Spot worker count](assets/posts/2026-10-10-alpha-pocket/gcp-dashboard.png)

*AlphaPocket Control Center, captured on July 13, 2026. The chart covers the July 8 to 12 processing run.*

## Using the explorer

The workflow I want is straightforward. Start with a protein, choose a pocket, inspect its nearest neighbors, and open a comparison that I can save or share. The 3D views show the selected residues, and the descriptors give me a few concrete things to compare between regions.

AlphaPocket is a tool for finding and inspecting related regions. Embedding similarity helps narrow the search, while establishing how a pocket binds a molecule needs further analysis. For this project, the focus is on making the indexed results easy to explore and inspect.

The app is built with React and TypeScript, with an Express API. Browsing does not need a GPU. The source and local demo instructions are on [GitHub](https://github.com/Drabble/Alpha-Pocket).
