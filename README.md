
# Usage example
See both TypeScript and JavaScript examples in `examples` dir. TS quickstart:
```
import { 
  Dota2GSIServer,
  Dota2Event,
  IDota2StateEvent,
} from 'node-gsi';
  
const debug = true;
const server = new Dota2GSIServer('/gsi', debug);

server.events.on(Dota2Event.Dota2State, (event: IDota2StateEvent) => {
  console.log('Dota2 event!');
  if (event.state.player) {
    console.log(event.state.player.gold);
  }
});
server.listen(9001);
```
# Configuration file example
Place this content in file `steamapps/common/dota 2 beta/game/dota/cfg/gamestate_integration/gamestate_integration_*.cfg`. 
Replace `*` with the name of your file.

```
"dota2-gsi Configuration"
{
    "uri"               "http://localhost:9001/gsi"
    "timeout"           "5.0"
    "buffer"            "0.1"
    "throttle"          "0.1"
    "heartbeat"         "30.0"
    "data"
    {
        "abilities"     "1"
        "buildings"     "1"
        "couriers"      "1"
        "draft"         "1"
        "events"        "1"
        "items"         "1"
        "hero"          "1"
        "league"        "1"
        "map"           "1"
        "minimap"       "1"
        "neutralitems"  "1"
        "player"        "1"
        "provider"      "1"
        "roshan"        "1"
        "wearables"     "1"
    }
    "auth"
    {
        "token"         "your_token_here"
    }
}
```
