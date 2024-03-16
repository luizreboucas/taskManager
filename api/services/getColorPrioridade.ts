import { CorPrioridade, TipoPrioridade } from "../utils/prioridadeEnum"
import Task from "../models/taskModel"

export const getColorPrioridade = (prioridade: number) => {
    if(prioridade === TipoPrioridade.alta) return CorPrioridade.alta;
    else if (prioridade === TipoPrioridade.media) return CorPrioridade.media;
    return CorPrioridade.baixa;
}
