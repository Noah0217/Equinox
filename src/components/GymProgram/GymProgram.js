/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import GymTitle from "./GymTitle";
import GymSubtitle from "./GymSubtitle";
import GymProgramCard from "./GymProgramCard";
import Container from "../GlobalComponents/Container";

const GymProgram = () => (
  <div css={styles} className="gymProgram">
    <GymTitle />
    <Icon />
    <GymSubtitle />
    <Container>
      <GymProgramCard
        title="Basic Fitness"
        desc="One's ability to execute daily activities with optimal performance, endurance, and strength with the management of disease."
      />
      <GymProgramCard
        title="Advanced Muscle Course"
        desc=" Endurance, strength, balance, and flexibility. Each one has different benefits. Doing one kind also can improve your ability."
      />
      <GymProgramCard
        title="New Gym Training"
        desc="Try starting with short workouts that are 30 minutes or less. As you feel your strength building."
      />
      <GymProgramCard
        title="Yoga Training"
        desc="Slow movements and deep breathing increase blood flow and warm up muscles, while holding a pose can build strength"
      />
      <GymProgramCard
        title="Basic Muscle Course"
        desc="squat, hinge, push, pull, and core work. There are many variations of each of those movements."
      />
      <GymProgramCard
        title="Body Building Course"
        desc="Bodybuilding is the use of progressive resistance exercise to control and develop one's muscles by muscle for aesthetic purposes."
      />
    </Container>
  </div>
);

const styles = css`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 120px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
  }
  @media (max-width: 700px) {
    .container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  @media (min-width: 701px) and (max-width: 1100px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default GymProgram;
