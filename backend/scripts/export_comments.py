import json
import os
from blog.models import Comment

def export_comments():
    output_file = 'comments_dump.json'
    comments_data = []

    # Select related to avoid N+1 queries on blog and section
    comments = Comment.objects.select_related('blog', 'blog__section', 'author').all()

    for c in comments:
        if not c.approved:
            continue
        comment_entry = {
            "id": c.id,
            "created": c.created.isoformat(),
            "body": c.body,
            "approved": c.approved,
            "author": c.author.username if c.author else c.name,
            "parent_id": c.parent_id,
            "blog": {
                "slug": c.blog.slug if c.blog else None,
                "section_slug": c.blog.section.slug if (c.blog and c.blog.section) else None
            }
        }
        comments_data.append(comment_entry)

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(comments_data, f, indent=2, ensure_ascii=False)
    
    print(f"Successfully dumped {len(comments_data)} comments to {output_file}")

export_comments()
