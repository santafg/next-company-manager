import CreateCompanyForm from "@/components/forms/CreateCompanyForm";
import CreateUserForm from "@/components/forms/CreateUserForm";

export default function Home() {
  return (
    <div>
      <CreateUserForm />
      <CreateCompanyForm />
    </div>
  );
}
