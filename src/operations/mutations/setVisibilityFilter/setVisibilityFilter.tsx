import { VisiblityFilter } from "../../../models/VisibilityFilter";
import { ReactiveVar } from "@apollo/client";

const setVisibilityFilter = (
  visibilityFilterVar: ReactiveVar<VisiblityFilter>
) => (filter: VisiblityFilter) => visibilityFilterVar(filter);

export default setVisibilityFilter;
