import { StompService } from './stomp.service'
import { stompConfig } from './stomp.config'

export function stompServiceFactory() {
    const s = new StompService();
    s.configure(stompConfig);
    s.activate()
    return s;
}