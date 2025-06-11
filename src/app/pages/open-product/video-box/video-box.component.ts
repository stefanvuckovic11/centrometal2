import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-video-box',
  templateUrl: './video-box.component.html',
  styleUrls: ['./video-box.component.scss'],
  standalone: false
})
export class VideoBoxComponent implements AfterViewInit {
  @Input() thumbnail!: string;
  @Input() videoSrc!: string;

  public isPlaying: boolean = false;

  @ViewChild('videoPlayer') private videoPlayer!: ElementRef<HTMLVideoElement>;

  public ngAfterViewInit(): void {}

  public playVideo(): void {
    this.isPlaying = true;
    setTimeout(() => this.videoPlayer.nativeElement.play());
  }

  public stopVideo(): void {
    const vid = this.videoPlayer.nativeElement;
    vid.pause();
    vid.currentTime = 0;
    this.isPlaying = false;
  }
}
