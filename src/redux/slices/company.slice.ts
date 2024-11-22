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
    setCompanies(state, action: PayloadAction<ICompany[]>) {
      state.companies = action.payload;
    },
    addCompany(state, action: PayloadAction<ICompany>) {
      state.companies?.unshift(action.payload);
    },
    updateCompany(state, action: PayloadAction<ICompany>) {
      const index = state.companies?.findIndex(
        (company) => company.id === action.payload.id
      );
      if (index && state.companies && index !== -1) {
        state.companies[index] = action.payload;
      }
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
