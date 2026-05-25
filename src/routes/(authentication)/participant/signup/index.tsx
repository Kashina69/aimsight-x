import {
	AuthActions,
	AuthButton,
	AuthCard,
	AuthForm,
	AuthLayout,
	AuthMutedText,
} from "~/components/authentication/Auth";

export default function ParticipantSignup() {
	return (
		<AuthLayout title="Participant sign up" subtitle="Join the participant community.">
			<AuthCard title="Sign up">
				<AuthMutedText>Create a participant profile in minutes.</AuthMutedText>
				<AuthForm variant="signup" />
				<AuthActions>
					<AuthButton href="/participant/signin">
						I already have an account
					</AuthButton>
					<AuthButton href="/authentication">Back</AuthButton>
				</AuthActions>
			</AuthCard>
		</AuthLayout>
	);
}
