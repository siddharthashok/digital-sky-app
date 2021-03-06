import { userAirspaceCategoryService } from "../services/userAirspaceCategoryService";

export const LOAD_USER_AIRSPACE_CATEGORIES_SUCCESS =
  "LOAD_USER_AIRSPACE_CATEGORIES_SUCCESS";
export const LOAD_USER_AIRSPACE_CATEGORIES_FAILURE =
  "LOAD_USER_AIRSPACE_CATEGORIES_FAILURE";

export const loadUserAirspaceCategoriesAction = () => {
  return dispatch => {
    userAirspaceCategoryService.loadAirspaceCategories().then(
      airspaceCategories => {
        dispatch(success(airspaceCategories));
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };

  function success(airspaceCategories) {
    return { type: LOAD_USER_AIRSPACE_CATEGORIES_SUCCESS, airspaceCategories };
  }

  function failure(errors) {
    return { type: LOAD_USER_AIRSPACE_CATEGORIES_FAILURE, errors };
  }
};
