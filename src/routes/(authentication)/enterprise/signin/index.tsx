import { AuthRolePage } from "~/components/authentication/Auth";

export default function EnterpriseSignin() {
	return <AuthRolePage role="enterprise" initialTab="signin" />;
}
