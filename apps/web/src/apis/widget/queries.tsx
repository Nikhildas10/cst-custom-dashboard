import { apiClient } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

interface WidgetPreference {
  widgetName: string
  isVisible: boolean
}

export function useGetWidgetPreferences() {
  return useQuery({
    queryKey: ['widget-preferences'],
    queryFn: async () => {
      const response = await apiClient.get('user/widget/preferences')
      return response.data.data as WidgetPreference[];
    },
  })
}