import { Component } from "@angular/core";

@Component({
	selector    : "gw-root",
	templateUrl : "./app.component.html",
	styleUrls   : ["./app.component.css"]
})
export class AppComponent {
	public readonly correctAnswer = "electric mucus";
	public userInput = "";

	public isExerciseEnded = false;

	public endTheExercise() {
		this.isExerciseEnded = true;
		alert("Done!");
	}
}
