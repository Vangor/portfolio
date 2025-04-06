/**
 * Custom image loader for Next.js to work with Cloudflare Pages and Images
 * @param {Object} param0 - Image parameters
 * @param {string} param0.src - Source URL of the image
 * @param {number} param0.width - Requested width of the image
 * @param {number} param0.quality - Requested quality of the image
 * @returns {string} - Transformed image URL
 */
export default function cloudflareImageLoader({ src, width, quality }) {
  // For local development, return the src as-is
  if (process.env.NODE_ENV === 'development') {
    return src;
  }

  // If the image is already a full URL, use it directly
  if (src.startsWith('http')) {
    // Add Cloudflare Image Resizing parameters
    const url = new URL(src);
    url.searchParams.set('width', width.toString());

    if (quality) {
      url.searchParams.set('quality', quality.toString());
    }

    return url.href;
  }

  // For relative URLs, combine with the deployment URL
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  const imageUrl = `${baseUrl}${src.startsWith('/') ? '' : '/'}${src}`;

  return `${imageUrl}?width=${width}${quality ? `&quality=${quality}` : ''}`;
}
