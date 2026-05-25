import {
	AuthActions,
	AuthButton,
	AuthCard,
	AuthForm,
	AuthLayout,
	AuthMutedText,
} from "~/components/authentication/Auth";

export default function EnterpriseSignup() {
	return (
		<AuthLayout title="Enterprise sign up" subtitle="Create your agency account.">
			<AuthCard title="Sign up">
				<AuthMutedText>Start a new enterprise workspace.</AuthMutedText>
				<AuthForm variant="signup" />
				<AuthActions>
					<AuthButton href="/enterprise/signin">
						I already have an account
					</AuthButton>
					<AuthButton href="/authentication">Back</AuthButton>
				</AuthActions>
			</AuthCard>
		</AuthLayout>
	);
}
