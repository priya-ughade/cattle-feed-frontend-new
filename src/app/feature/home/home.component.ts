import { Component, Inject, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { interval, Subscription ,} from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  intervalTime: any = 10000; // Time in milliseconds between image transitions
  currentIndex :any = 0;
  images = [
    'assets/img1.jpg',
    'assets/img2.jpg',
    'assets/img3.jpg',];


 
  transitionStyle = 'transform 0.5s ease-in-out';
  private animationFrameId: number = 0;
  private lastTime = 0;
  private delay = 3000;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

   ngOnInit(): void {
    if (this.isBrowser) {
      this.loop();
    }
  }
  loop = (time: number = 0) => {
    if (!this.lastTime) this.lastTime = time;

    const elapsed = time - this.lastTime;

    if (elapsed > this.delay) {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.lastTime = time;
    }

    this.animationFrameId = requestAnimationFrame(this.loop);
  };

  ngOnDestroy(): void {
     if (this.isBrowser) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}
