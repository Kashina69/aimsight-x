import {
	AuthActions,
	AuthButton,
	AuthCard,
	AuthForm,
	AuthLayout,
	AuthMutedText,
} from "~/components/authentication/Auth";

export default function EnterpriseSignin() {
	return (
		<AuthLayout title="Enterprise sign in" subtitle="Access your agency workspace.">
			<AuthCard title="Sign in">
				<AuthMutedText>Use your work email to continue.</AuthMutedText>
				<AuthForm variant="signin" />
				<AuthActions>
					<AuthButton href="/enterprise/signup">
						Create account
					</AuthButton>
					<AuthButton href="/authentication">Back</AuthButton>
				</AuthActions>
			</AuthCard>
		</AuthLayout>
	);
}
