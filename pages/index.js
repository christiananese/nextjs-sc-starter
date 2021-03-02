import {
  Container,
  Contain,
  Section,
} from "../components/layout/main-container";

import Teaser from "../components/content-blocks/teaser";
import SplitView from "../components/content-blocks/split-view";

export default function Home() {
  return (
    <Container>
      <Section>Hallo ich bin zentriert</Section>
      <Section fullBleed={true}>
        <Teaser
          title="Ich habe geburtstag"
          text="Hallo"
          img="https://images.unsplash.com/photo-1614607660006-945b019c188a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          style={{
            "--rowPadding": "160px",
          }}
        />
        <SplitView
          title="Ich habe geburtstag"
          text="Hallo"
          img="https://images.unsplash.com/photo-1614607660006-945b019c188a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        />
        <SplitView
          title="Ich habe geburtstag"
          text="Hallo"
          right={true}
          img="https://images.unsplash.com/photo-1614607660006-945b019c188a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        />
      </Section>
    </Container>
  );
}
