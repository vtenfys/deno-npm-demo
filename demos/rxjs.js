import { of } from "rxjs";
import { map } from "rxjs/operators";

map(x => x * x)(of(1, 2, 3)).subscribe(v => console.log(`value: ${v}`));

// Logs:
// value: 1
// value: 4
// value: 9
