import Countdown from "@/Components/Timers/Countdown";
import StopWatch from "@/Components/Timers/StopWatch";

export const metadata = {
  title: "Timers",
  description: "here you can find very nice stop watch and countdown timer",
};

export default function TimersPage() {
  return (
    <div>
      <StopWatch />

      <Countdown duration={5_000} />
    </div>
  );
}
