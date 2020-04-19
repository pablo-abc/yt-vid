import { newE2EPage } from '@stencil/core/testing';

describe('yt-vid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yt-vid></yt-vid>');

    const element = await page.find('yt-vid');
    expect(element).toHaveClass('hydrated');
  });
});
