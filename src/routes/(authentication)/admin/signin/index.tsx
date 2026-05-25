import {
	AuthActions,
	AuthButton,
	AuthCard,
	AuthForm,
	AuthLayout,
	AuthMutedText,
} from "~/components/authentication/Auth";

export default function AdminSignin() {
	return (
		<AuthLayout title="Admin sign in" subtitle="Restricted admin access only.">
			<AuthCard title="Sign in">
				<AuthMutedText>Use your admin credentials to continue.</AuthMutedText>
				<AuthForm variant="signin" />
				<AuthActions>
					<AuthButton href="/authentication">Back</AuthButton>
				</AuthActions>
			</AuthCard>
		</AuthLayout>
	);
}
