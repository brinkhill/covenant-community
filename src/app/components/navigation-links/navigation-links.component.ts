import { Component, Input } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation-links',
  templateUrl: 'navigation-links.component.html',
  styleUrls: ['navigation-links.component.css'],
})
export class NavigationLinks {
  @Input()
  text2: string = 'Location';
  @Input()
  text3: string = 'About';
  @Input()
  text4: string = 'Beliefs';
  @Input()
  rootClassName: string = '';

  @Input()
  text: string = 'Home';
  @Input()
  text1: string = 'Sermons';

  constructor(private scroller: ViewportScroller, private router: Router) { }
  ngOnInit() {
    this.router.navigate(['/']);
  }

  services() {
    //this.scroller.scrollToAnchor("targetGreen");
    document.getElementById('checkbox').click();

    document.getElementById('services').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  location() {
    //this.scroller.scrollToAnchor("targetGreen");
    document.getElementById('checkbox').click();
    document.getElementById('location').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  statement() {
    //this.scroller.scrollToAnchor("targetGreen");
    document.getElementById('checkbox').click();
    document.getElementById('statement').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  about() {
    //this.scroller.scrollToAnchor("targetGreen");

    document.getElementById('checkbox').click();

    document.getElementById('about').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
