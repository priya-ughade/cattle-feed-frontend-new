import { Component, Inject, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { interval, Subscription, } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  intervalTime: any = 10000; // Time in milliseconds between image transitions
  currentIndex: any = 0;
  images = [
    'assets/img1.jpg',
    'assets/img2.jpg',
    'assets/img3.jpg',];



  transitionStyle = 'transform 0.5s ease-in-out';
  private animationFrameId: number = 0;
  private lastTime = 0;
  private delay = 3000;
  private isBrowser: boolean;
  RESET_TIME_THRESHOLD = 300; // 5 minutes
  counter: any = 0;
  timeToSlide = 30000;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.loop();
    }
  }
  loop = () => {

    let fixedTimeInterval = 10000;
    // debugger

    this.counter = this.counter + this.timeToSlide;
    console.log("counter -->", this.counter)
    console.log("this. -->", this.timeToSlide)
    if (this.counter > this.timeToSlide) {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;

      console.log("this.currentIndex -->", this.currentIndex)
      console.log("counter2 -->", this.counter)
      console.log("timeToSlide2 -->", this.timeToSlide)
      this.timeToSlide = this.counter + this.timeToSlide
      if (this.currentIndex == this.images.length - 1) {
        this.counter = 0
        this.timeToSlide = 30000

      }
    }
    setTimeout(() => {
      this.loop()
    }, 10000)
    // this.animationFrameId = requestAnimationFrame(this.loop);
  };

  ngOnDestroy(): void {
    if (this.isBrowser) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}
