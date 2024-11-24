import { ICompany } from "@/ts/interfaces/company.interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CompaniesState {
  companies: ICompany[] | null;
}

const initialState: CompaniesState = {
  companies: null,
};

const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    setCompanies(state, action: PayloadAction<ICompany[] | null>) {
      state.companies = action.payload;
    },
    addCompany(state, action: PayloadAction<ICompany>) {
      state.companies?.unshift(action.payload);
    },
    updateCompany(state, action: PayloadAction<ICompany>) {
      state.companies = state.companies
        ? state.companies?.map((company) =>
            company.id === action.payload.id ? { ...action.payload } : company
          )
        : [];
    },
    deleteCompany(state, action: PayloadAction<string>) {
      state.companies = state.companies
        ? state.companies.filter((company) => company.id !== action.payload)
        : [];
    },
  },
});

export const { setCompanies, addCompany, updateCompany, deleteCompany } =
  companiesSlice.actions;
export default companiesSlice.reducer;
