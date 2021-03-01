import Container, {
  Contain,
  Section,
} from "../components/layout/main-container";

export default function Home() {
  return (
    <Container>
      <Section>Hallo ich bin zentriert</Section>
      <Section fullBleed={true}>
        <Contain>Hallo ich bin breit und dick</Contain>
      </Section>
    </Container>
  );
}
