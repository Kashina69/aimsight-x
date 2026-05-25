import {
	AuthActions,
	AuthButton,
	AuthCard,
	AuthForm,
	AuthLayout,
	AuthMutedText,
} from "~/components/authentication/Auth";

export default function ParticipantSignin() {
	return (
		<AuthLayout title="Participant sign in" subtitle="Continue your participant account.">
			<AuthCard title="Sign in">
				<AuthMutedText>Sign in to view your studies.</AuthMutedText>
				<AuthForm variant="signin" />
				<AuthActions>
					<AuthButton href="/participant/signup">
						Create account
					</AuthButton>
					<AuthButton href="/authentication">Back</AuthButton>
				</AuthActions>
			</AuthCard>
		</AuthLayout>
	);
}
