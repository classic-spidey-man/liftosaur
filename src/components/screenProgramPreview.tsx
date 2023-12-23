import { h, JSX } from "preact";
import { IDispatch } from "../ducks/types";
import { IProgram, ISettings, ISubscription } from "../types";
import { ILoading, IState, updateState } from "../models/state";
import { Surface } from "./surface";
import { NavbarView } from "./navbar";
import { Footer2View } from "./footer2";
import { IScreen, Screen } from "../models/screen";
import { ProgramPreview } from "./programPreview";
import { MenuItemEditable } from "./menuItemEditable";
import { lb } from "lens-shmens";

interface IProps {
  dispatch: IDispatch;
  settings: ISettings;
  programs: IProgram[];
  selectedProgramId: string;
  subscription: ISubscription;
  loading: ILoading;
  screenStack: IScreen[];
}

export function ScreenProgramPreview(props: IProps): JSX.Element {
  const program = props.programs.filter((p) => p.id === props.selectedProgramId)[0];
  return (
    <Surface
      navbar={
        <NavbarView
          loading={props.loading}
          dispatch={props.dispatch}
          screenStack={props.screenStack}
          title="Program Preview"
        />
      }
      footer={<Footer2View dispatch={props.dispatch} screen={Screen.current(props.screenStack)} />}
    >
      <div>
        <section className="px-4">
          <MenuItemEditable
            type="select"
            name="Program"
            value={props.selectedProgramId}
            values={props.programs.map((p) => [p.id, p.name])}
            onChange={(value) => {
              if (value != null) {
                updateState(props.dispatch, [lb<IState>().pi("previewProgram").p("id").record(value)]);
              }
            }}
          />

          <ProgramPreview
            key={props.selectedProgramId}
            isMobile={true}
            dispatch={props.dispatch}
            settings={props.settings}
            program={program}
            subscription={props.subscription}
          />
        </section>
      </div>
    </Surface>
  );
}
