export default function index({ component: Component, ...rest }) {
  return (
    <div className="modalWrapper">
      <Component {...rest} />
    </div>
  );
}
