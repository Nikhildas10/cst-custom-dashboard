import { apiClient } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

interface WidgetPreference {
    widgetName: string;
    isVisible: boolean;
}

export function useUpdateWidgetPreferences() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (preferences: WidgetPreference[]) => {
            const response = await apiClient.put('user/widget/preferences', { preferences });
            return response.data;
        },
        onSuccess: () => {
            toast.success("Widget preferences updated successfully");
            queryClient.invalidateQueries({ queryKey: ['widget-preferences'] });
        },
        onError: () => {
            toast.error("Failed to update widget preferences");
        }
    });
}
