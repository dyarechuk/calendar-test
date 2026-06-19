import { Button } from "../../../shared/ui/Button";
import { Input } from "../../../shared/ui/Input";
import { Modal, type ModalPosition } from "../../../shared/ui/Modal";
import { EVENT_COLORS } from "../model/constants";
import type { CalendarEvent, CalendarEventFormValues } from "../model/types";
import { useEventModal } from "../model/useEventModal";

type EventModalMode = "create" | "view" | "edit";

type EventModalProps = {
  mode: EventModalMode;
  selectedDate?: Date;
  position?: ModalPosition;
  event?: CalendarEvent | null;
  onClose: () => void;
  onCreate: (values: CalendarEventFormValues) => void;
  onUpdate: (id: string, values: CalendarEventFormValues) => void;
  onDelete: (id: string) => void;
};

export function EventModal({
  mode,
  selectedDate,
  position,
  event,
  onClose,
  onCreate,
  onUpdate,
  onDelete,
}: EventModalProps) {
  const {
    values,
    errors,
    currentMode,
    isReadonly,
    isPastEvent,
    updateField,
    handleSave,
    handleDelete,
    enableEditMode,
  } = useEventModal({
    mode,
    selectedDate,
    event,
    onCreate,
    onUpdate,
    onDelete,
    onClose,
  });

  return (
    <Modal position={position} onClose={onClose}>
      <div className="space-y-4 pt-2">
        <Input
          label="event name"
          value={values.title}
          maxLength={30}
          disabled={isReadonly}
          error={errors.title}
          onChange={(event) => updateField("title", event.target.value)}
        />

        <Input
          label="event date"
          type="date"
          value={values.date}
          disabled={isReadonly}
          error={errors.date}
          onChange={(event) => updateField("date", event.target.value)}
        />

        <Input
          label="event time"
          type="time"
          value={values.time}
          disabled={isReadonly}
          error={errors.time}
          onChange={(event) => updateField("time", event.target.value)}
        />

        <Input
          label="notes"
          value={values.notes}
          disabled={isReadonly}
          error={errors.notes}
          onChange={(event) => updateField("notes", event.target.value)}
        />

        {!isReadonly && (
          <div>
            <span className="mb-2 block text-[11px] text-slate-400">color</span>

            <div className="flex gap-2">
              {EVENT_COLORS.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => updateField("color", color)}
                  className="h-5 w-5 rounded-full border"
                  style={{
                    backgroundColor: color,
                    outline:
                      values.color === color ? "2px solid #3f3d56" : "none",
                  }}
                  aria-label={`Select ${color}`}
                />
              ))}
            </div>

            {errors.color && (
              <span className="mt-1 block text-[10px] text-red-500">
                {errors.color}
              </span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between pt-3">
          {currentMode === "view" ? (
            <>
              <Button variant="danger" onClick={handleDelete}>
                DISCARD
              </Button>

              <Button
                disabled={isPastEvent}
                variant="ghost"
                onClick={enableEditMode}
              >
                EDIT
              </Button>
            </>
          ) : (
            <>
              <Button variant="danger" onClick={onClose}>
                Cancel
              </Button>

              <Button variant="ghost" onClick={handleSave}>
                Save
              </Button>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
}
