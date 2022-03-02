import { isNgTemplate } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Task";
  data: any = "";
  students: any = [];
  allStudents: any = [];
  num: number = 1;

  getValues(val: any) {
    this.allStudents.push(val);
    this.students = this.allStudents;
  }

  passed() {
    this.students = this.allStudents.filter((item: any) => item.marks > 40);
  }
  failed() {
    this.students = this.allStudents.filter((item: any) => item.marks < 40);
  }
  averageStudent() {
    this.students = this.allStudents.filter(
      (item: any) => item.marks > 40 && item.marks < 60
    );
  }
  excelentStudent() {
    this.students = this.allStudents.filter((item: any) => item.marks > 75);
  }

  totalStudents() {
    this.students = this.allStudents;
  }
  delete(index: number) {
    this.students.splice(index, 1);
  }

  dice() {
    this.num = Math.floor(Math.random() * 6) + 1;
  }
}
