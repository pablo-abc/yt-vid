import { newSpecPage } from '@stencil/core/testing';
import { YtVid } from './yt-vid';

describe('yt-vid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YtVid],
      html: `<yt-vid></yt-vid>`,
    });
    expect(page.root).toEqualHtml(`
      <yt-vid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yt-vid>
    `);
  });
});
