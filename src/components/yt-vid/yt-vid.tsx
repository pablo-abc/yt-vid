import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'yt-vid',
  styleUrl: 'yt-vid.css',
  shadow: true,
})
export class YoutubeVideo implements ComponentInterface {

  @Prop() src: string;

  @Prop() alt?: string;

  @Prop() allow?: string;

  @Prop() allowfullscreen = false;

  @Prop() height?: string;

  @Prop() width?: string;

  @Prop() customPlayIcon?: string;

  render() {
    const playIcon = this.customPlayIcon || '▶';
    const url = new URL(this.src);
    const videoId = url.pathname.split('/')[2];
    const alt = JSON.stringify(this.alt || 'YouTube video');
    const srcdoc = `<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=${this.src}?autoplay=1><img src=https://img.youtube.com/vi/${videoId}/hqdefault.jpg alt=${alt} title=${alt}><span>${playIcon}</span></a>`;
    const allow = this.allow || 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';

    return (
      <Host>
        <iframe
          loading="lazy"
          title={alt}
          src={this.src}
          frameborder="0"
          allow={allow}
          srcdoc={srcdoc}
          height={this.height}
          width={this.width}
          // @ts-ignore
          allowfullscreen={this.allowfullscreen}
        >

        </iframe>
      </Host >
    );
  }

}
