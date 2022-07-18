import { useState } from "react";
import Button from "@mui/material/Button";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import "./event.css";
import { EventData } from "../../app/shared/EventData";

const Scheduler = () => {
  const [scheduleObj, setScheduleObj] = useState();

  const onDragStart = (arg) => {
    arg.navigation.enable = true;
  };

  return (
    <div className="" id="calenderBg">
      <div className="w-100 overflow-hidden d-flex px-3 rounded pt-2 pb-2 eventBox">
        <div className="w-50 h-100  listEvent text-white">
          <Button variant="contained">Add_Event</Button>
          <div>
            <div>
              <label>
                <input type="checkbox" />
              </label>
              <label className="ms-1 mt-4">View All</label>
            </div>
            <div>
              <label>
                <input type="checkbox" />
              </label>
              <label className="ms-1 my-1">Personal</label>
            </div>
            <div>
              <label>
                <input type="checkbox" />
              </label>
              <label className="ms-1 my-1">Business</label>
            </div>
            <div>
              <label>
                <input type="checkbox" />
              </label>
              <label className="ms-1 my-1">Family</label>
            </div>
            <div>
              <label>
                <input type="checkbox" />
              </label>
              <label className="ms-1 my-1 me-1">Hollydays</label>
            </div>
          </div>
        </div>
        <ScheduleComponent
          height="650px"
          currentView="Month"
          ref={(schedule) => setScheduleObj(schedule)}
          selectedDate={new Date(2022, 5, 20)}
          eventSettings={{ dataSource: EventData }}
          dragStart={onDragStart}
        >
          <ViewsDirective>
            {["Day", "Week", "WorkWeek", "Month", "Agenda"].map((item) => (
              <ViewDirective key={item} option={item} />
            ))}
          </ViewsDirective>

          <Inject
            services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
          />
        </ScheduleComponent>
      </div>
    </div>
  );
};

export default Scheduler;
