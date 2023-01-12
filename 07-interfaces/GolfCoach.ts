import { Coach } from "./Coach";

export class GolfCoach implements Coach{
    getDailyWorkout(): string {
        return "practice golf now!";
    }
}