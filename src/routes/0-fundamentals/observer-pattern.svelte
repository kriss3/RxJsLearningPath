<script lang="ts">
  import { Subject, Observer } from "../../utils/classes";
  import Page from "../../lib/Page.svelte";

    const subject: Subject = new Subject();
    const observer1: Observer = new Observer();
    const observer2: Observer = new Observer();
    const observer3: Observer = new Observer();
    const observer4: Observer = new Observer();

    subject.subscribe(observer1);
    subject.subscribe(observer2);
    subject.subscribe(observer3);
    subject.subscribe(observer4);

    subject.notifyAllObservers();

</script>

<section>
    <Page title="Observer pattern" subTitle="(Open devtools)" />
</section>
