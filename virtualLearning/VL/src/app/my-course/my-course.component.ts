import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { HomeServiceService } from '../home-service.service';

@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.component.html',
  styleUrls: ['./my-course.component.css']
})

export class MyCourseComponent implements OnInit {
  active = 'active';
  active1 = 'no-active';
  part2Chap = false;
  part2Over = true;
  part1video = true;
  expand = false;
  removePlus = true;
  removeminus = false;
  act = 'act';
  act1 = 'no-act'
  demo1 = true;
  showMoreButt = true;
  showLessDetails = false;
  showLessBut = false
  CourseId: any;
  overViewDetails: any;
  chapterDetails: any;
  chapterarray: any[] = []
  chapterlength: any;
  vedio: any;
  join1=true;
  join2=true;
  constructor(private courseDetailsService: HomeServiceService) { }

  ngOnInit(): void {
    this.CourseId = sessionStorage.getItem('courseId');
    this.getOverview(this.CourseId);
    this.getChapter(this.CourseId)
  }

  getOverview(courseId: any) {
    this.courseDetailsService.getOverviewDetails(courseId).subscribe(data => {
      console.log(data, "overview");
      this.overViewDetails = data
      this.vedio = this.overViewDetails?.courseOverview?.overViewId?.previewThisCourse?.videoLink;
      if(this.overViewDetails.isEnrolled!=null) {
        this.join1=false;
        this.join2=false;

      }
    })

  }
  getChapter(courseId: any) {
    this.courseDetailsService.getChapterDetails(courseId).subscribe(data => {
      console.log(data, "chapter");
      this.chapterDetails = data;
      this.chapterlength =

        this.chapterDetails.listOfChapters.totalChapters[0].chapters.length;
      for (var i = 0; i < this.chapterlength; i++) {
        this.chapterarray.push('false');
      }
    })
  }
  over() {
    this.act = 'act';
    this.act1 = 'no-act'
    this.part2Over = true;
    this.part2Chap = false;
    this.part1video = true;

  }
  chap() {
    this.act = 'no-act';
    this.act1 = 'act'
    this.part2Over = false;
    this.part2Chap = true;
    this.part1video = false;
  }
  plus(index: any) {
    this.expand = true;
    this.removePlus = false;
    this.removeminus = true;
    this.chapterarray[index] = !this.chapterarray;
  }
  minus(index: any) {
    this.expand = false;
    this.removePlus = true;
    this.removeminus = false;
    this.chapterarray[index] = this.chapterarray;

  }
  mblOver() {
    this.act = 'act'
    this.act1 = 'no-act'
  }
  mblChap() {
    this.act = 'no-act'
    this.act1 = 'act'

  }
  showMore() {
    this.showMoreButt = false;
    this.showLessDetails = true;
    this.showLessBut = true
  }
  showLess() {
    this.showMoreButt = true;
    this.showLessDetails = false;
    this.showLessBut = false
  }
  onClickVideoPaly(url: any, mainIndex: any, subIndex: any) {
    // console.log('inde', mainIndex);

    // console.log('dd', subIndex);
    this.vedio = url;
    console.log(this.vedio);
    sessionStorage.setItem('serialid',this.chapterDetails.listOfChapters.totalChapters[0].chapters[mainIndex].lessons[subIndex].serialNumberOfLesson
    );
  }

}
