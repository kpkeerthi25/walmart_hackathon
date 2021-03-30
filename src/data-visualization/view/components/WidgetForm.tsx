import classNames from "classnames";
import * as React from "react";
import Interview from "../../../common/types/Interview";
import Course from "../../../common/types/Course";
import CourseList from "./CourseList";
import InterviewFormInputs from "./InterviewFormInputs";
import RoundStudentListContainer from "../containers/RoundStudentListContainer";
import RoundListContainer from "../containers/RoundListContainer";
import { Button, Classes, Overlay } from "@blueprintjs/core";

interface Props {
  changeEditMode: (editMode: boolean) => void;
  changeStudentListView: (studentListView: boolean) => void;
  editMode: boolean;
  interview: Interview | null;
  changeInterview: (interview: Interview) => void;
  courseList: Array<Course>;
  save: () => void;
}

export default function (props: Props) {
  if (!props.interview) {
    return <div />;
  } else {
    return (
      <Overlay
        isOpen={props.editMode}
        onClose={() => {
          props.changeEditMode(false);
        }}
        className={Classes.OVERLAY_SCROLL_CONTAINER}
      >
        <div
          className={classes}
          style={{
            width: "fit-content",
            margin: "auto",
            position: "relative",
            marginTop: 50,
            marginBottom: 50,
          }}
        >
          <InterviewFormInputs
            interview={props.interview}
            changeInterview={props.changeInterview}
          />
          <CourseList
            courseList={props.courseList}
            changeInterview={props.changeInterview}
            interview={props.interview}
          />
          {/* @ts-ignore */}
          <RoundListContainer />
          <Button
            minimal={true}
            outlined={true}
            icon={"floppy-disk"}
            onClick={props.save}
          >
            Save
          </Button>
          <RoundStudentListContainer />
        </div>
      </Overlay>
    );
  }
}

const OVERLAY_EXAMPLE_CLASS = "docs-overlay-example-transition";

const classes = classNames(
  Classes.CARD,
  Classes.ELEVATION_4,
  OVERLAY_EXAMPLE_CLASS
);

const styles = {
  container: {
    content: {
      width: "fit-content",
      maxHeight: "95%",
      alignSelf: "center",
      overflowY: "visible" as "initial",
    },
  },
  button: {
    alignSelf: "right",
    margin: 5,
    marginRight: 20,
    padding: 15,
    borderWidth: 0,
    float: "right" as "right",
  },
};

const OVERLAY_TALL_CLASS = "docs-overlay-example-tall";
