export function getFolderSlug(post: any) {
  const parts = post.id.split('/');
  if (parts.length > 2) {
    parts.splice(1,parts.length-2);
  }
  return parts.join('/');
}
