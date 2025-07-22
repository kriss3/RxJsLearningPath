<script lang="ts">
    import Page from "$lib/Page.svelte";
    import { Observable, type PartialObserver } from "rxjs";

    const observer: PartialObserver<string> = {
        next: (value: string) => console.log("Next notification", value)
    };

    const observable$ = new Observable<string>((subscriber) => {
        subscriber.next("(sync) Rhinocerous beatle.");
    });

    console.log("---- before subscribe ----")
    observable$.subscribe(observer);
    console.log("---- after subscribe ----")
</script>

<section>
    <Page title="Observer notifications works" subTitle="(Open devtools)" />
</section>
