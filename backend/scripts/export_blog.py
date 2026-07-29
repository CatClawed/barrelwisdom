from blog.models import *
import os
from pathlib import Path
BASE_DIR = Path('scripts/export/blogs/')

for blog in Blog.objects.all():
    section_folder = BASE_DIR / blog.section.slug
    section_folder.mkdir(parents=True, exist_ok=True)
    
    filename = f"{blog.slug}.md"
    file_path = section_folder / filename
    
    frontmatter = []
    frontmatter.append("---")
    frontmatter.append(f"title: \"{blog.title}\"")
    frontmatter.append(f"pubDate: \"{blog.created.strftime('%Y-%m-%d')}\"")
    frontmatter.append(f"updatedDate: \"{blog.modified.strftime('%Y-%m-%d')}\"")
    
    if blog.image:
        frontmatter.append(f"heroImage: \"{blog.image}\"")
        
    frontmatter.append(f"description: \"{blog.desc}\"")
    
    if blog.author.exists() and blog.authorlock:
        frontmatter.append("author: \"Chloe\"")
        
    if blog.tags.exists():
        tag_list = ", ".join([t.name for t in blog.tags.all()])
        frontmatter.append(f"tags: [{tag_list}]")
        
    frontmatter.append("---")
    
    frontmatter_string = "\n".join(frontmatter)
    full_content = f"{frontmatter_string}\n\n{blog.body}"
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(full_content)
        
    print(f"Saved: {file_path}")