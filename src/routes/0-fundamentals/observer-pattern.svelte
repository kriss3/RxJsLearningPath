<script lang="ts">
  import { Subject, Observer } from "../../utils/classes";
  import Page from "../../lib/Page.svelte";

    const subject: Subject = new Subject();
    const observer1: Observer = new Observer();
</script>

<section>
    <Page title="Observer pattern" subTitle="(Open devtools)" />
</section>
