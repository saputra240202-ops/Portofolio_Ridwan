export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900">
      <div className="flex flex-col items-center gap-4">
        <div className="loader-spin" />
        <p className="text-slate-400 text-sm font-medium animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
