import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-video-box',
  templateUrl: './video-box.component.html',
  styleUrls: ['./video-box.component.scss'],
  standalone: false
})
export class VideoBoxComponent implements AfterViewInit {
  @Input() thumbnail!: string;
  @Input() videoSrc!: string;

  isPlaying = false;

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {

  }

  playVideo() {
    this.isPlaying = true;
    setTimeout(() => {
      this.videoPlayer.nativeElement.play();
    });
  }

  stopVideo() {
    const vid = this.videoPlayer.nativeElement;
    vid.pause();
    vid.currentTime = 0;
    this.isPlaying = false;
  }
}
